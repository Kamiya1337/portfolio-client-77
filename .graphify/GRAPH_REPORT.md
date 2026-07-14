# Graph Report - .  (2026-07-14)

## Corpus Check
- Large corpus: 6101 files · ~6,816,158 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 30 nodes · 35 edges · 1 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 15 · imports_from: 14 · imports: 6


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 6101 · Candidates: 9574
- Excluded: 1 untracked · 2 ignored · 19 sensitive · 13 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `2558968`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `portfolioData` - 7 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 1 - "Community 1"
Cohesion: 0.47
Nodes (1): portfolioData

## Knowledge Gaps
- **Thin community `Community 1`** (1 nodes): `portfolioData`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `portfolioData` connect `Community 1` to `Community 2`, `Community 0`, `Community 3`, `Community 4`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._