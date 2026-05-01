#!/bin/bash
# Static check: every prose render-point interpolation in app/ must be
# wrapped in linkify(...) or marked with `// linkify-skip:` comment.
#
# Catches authors adding new prose render points without remembering to
# wrap them. Run as part of `npm run verify:links:static` (CI gate).

set -u

# Render-point patterns that should be wrapped in linkify or skipped.
# Format: "match-pattern" — one per line, OR'd via egrep -E.
PATTERN='\{[a-zA-Z]+\.(body|heroLead|introParagraph|context|lead)\}|\{faq\.a\}|\{w\.body\}|\{step\.body\}|\{item\.body\}|\{section\.body\}|\{section\.lead\}|\{d\.body\}|\{s\.body\}'

# Find candidate lines.
CANDIDATES=$(grep -rEn "$PATTERN" app/ 2>/dev/null || true)

# Filter: drop lines that contain linkify( on the same line OR have
# `linkify-skip:` somewhere within +/-2 source lines.
MISSING=""
while IFS= read -r line; do
  [ -z "$line" ] && continue

  # Skip if the line itself contains linkify(
  if echo "$line" | grep -q "linkify("; then
    continue
  fi

  # Parse "file:line:content"
  file=$(echo "$line" | cut -d: -f1)
  lineno=$(echo "$line" | cut -d: -f2)

  # Look at +/-2 source lines around the match for a linkify-skip marker.
  if [ -f "$file" ] && [ -n "$lineno" ]; then
    start=$((lineno - 2))
    [ $start -lt 1 ] && start=1
    end=$((lineno + 2))
    if sed -n "${start},${end}p" "$file" 2>/dev/null | grep -q "linkify-skip"; then
      continue
    fi
  fi

  MISSING="${MISSING}${line}\n"
done <<EOF
$CANDIDATES
EOF

if [ -n "$MISSING" ]; then
  echo "❌ Unwrapped prose render points found:"
  echo ""
  printf "$MISSING"
  echo ""
  echo "Each line should either:"
  echo "  1. Be wrapped: {linkify(thing.body, { currentPath: '...' })}"
  echo "  2. Be marked: // linkify-skip: <reason>   (within ±2 lines)"
  exit 1
fi

echo "✅ All prose render points in app/ are wrapped or explicitly skipped."
exit 0
