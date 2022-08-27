# asciimathml pandocfilter for DeepDwn editor
a fork of [asciimathml-pandocfilter](https://github.com/nanikamado/asciimathml-pandocfilter).

Made to make [DeepDwn](https://www.deepdwn.com/) created Markdown files compatible with pandoc and its features.

The filter supports inline and block `math` sections.

Known Issues:
It does not work with this kind of equation alignment: `{(2x,+,17y,=,23),(x,-,y,=,5):}` (taken from [the asciimath website](http://asciimath.org/)) 

asciimathml pandocfilter
========================

Node.js-based
[Pandoc filters](https://github.com/jgm/pandoc/wiki/Pandoc-Filters)
for converting asciimathml into TeX

This is a fork of the
[asciimathml](https://github.com/asciimath/asciimathml) repository
providing the conversion scripts (originally for web browsers):

* ASCIIMathML.js is a compact JavaScript program that translates
  simple calculator-style math expressions on a webpage to MathML.
* asciimath-based/ASCIIMathTeXImg.js provides utility functions
  AMTparseAMtoTeX, AMparseMath, and AMprocessNode to convert
  expressions in AsciiMath notation into LaTeX expressions.

## Dependencies

You need node.js and the [pandoc-filter](https://github.com/mvhenderson/pandoc-filter-node) package:

```
npm install -g pandoc-filter
```

## Usage

[Run pandoc with](http://pandoc.org/scripting.html#json-filters) this filter:

```
pandoc --filter ./path/to/asciimathfilter.js [your options ...]
```

The filter will apply conversion on any inline or block math object beginning with `:a`, e. g. `$:a sum_(k=1)^3 k$`.
