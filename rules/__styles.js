module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['error', {multiline: true}],
    // enforce consistent spacing inside array brackets
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],
    // enforce line breaks after each array element
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['error', 'consistent'],
    // disallow or enforce spaces inside of blocks after opening block and before closing block
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],
    // enforce consistent brace style for blocks
    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    camelcase: 'error',
    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'off',
    // require or disallow trailing commas
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],
    // enforce consistent spacing before and after commas
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', {before: false, after: true}],
    // enforce consistent comma style
    // https://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],
    // enforce consistent spacing inside computed property brackets
    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],
    // enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',
    // require or disallow newline at the end of files
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],
    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],
    // require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['error', 'always'],
    // require or disallow named `function` expressions
    // https://eslint.org/docs/rules/func-names
    'func-names': ['error', 'always'],
    // enforce the consistent use of either `function` declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': 'off',
    // enforce line breaks between arguments of a function call
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'consistent'],
    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'multiline-arguments'],
    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',
    // enforce minimum and maximum identifier lengths
    // https://eslint.org/docs/rules/id-length
    'id-length': 'off',
    // require identifiers to match a specified regular expression
    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',
    // enforce the location of arrow function bodies
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],
    // enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    indent: ['error', 4, {SwitchCase: 1}],
    // enforce the consistent use of either double or single quotes in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],
    // enforce consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': [
      'error',
      {beforeColon: false, afterColon: true, mode: 'strict'},
    ],
    // enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        overrides: {
          catch: {after: false},
          if: {after: false},
          for: {after: false},
          super: {after: false},
          switch: {after: false},
          throw: {after: false},
          while: {after: false},
          with: {after: false},
        },
      },
    ],
    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'off',
    // enforce consistent linebreak style
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],
    // require empty lines around comments
    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',
    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always'],
    // enforce a maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    'max-depth': 'off',
    // enforce a maximum line length
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // enforce a maximum number of lines per file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': 'off',
    // enforce a maximum number of line of code in a function
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': 'off',
    // enforce a maximum depth that callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',
    // enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    'max-params': 'off',
    // enforce a maximum number of statements allowed in function blocks
    // https://eslint.org/docs/rules/max-statements
    'max-statements': 'off',
    // enforce a maximum number of statements allowed per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'off',
    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',
    // enforce newlines between operands of ternary expressions
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',
    // require constructor names to begin with a capital letter
    // https://eslint.org/docs/rules/new-cap
    'new-cap': 'error',
    // enforce or disallow parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',
    // require a newline after each call in a method chain
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 3}],
    // disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',
    // disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',
    // disallow `continue` statements
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',
    // disallow inline comments after code
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',
    // disallow `if` statements as the only statement in `else` blocks
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',
    // disallow mixed binary operators
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'error',
    // disallow mixed spaces and tabs for indentation
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',
    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',
    // disallow multiple empty lines
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 0, maxEOF: 0}],
    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'error',
    // disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',
    // disallow `Object` constructors
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',
    // disallow the unary operators `++` and `--`
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    // disallow specified syntax
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 'off',
    // disallow all tabs
    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',
    // disallow ternary operators
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',
    // disallow trailing whitespace at the end of lines
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',
    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',
    // disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 'error',
    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',
    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside'],
    // enforce consistent line breaks inside braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', {multiline: true}],
    // enforce consistent spacing inside braces
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'never'],
    // enforce placing object properties on separate lines
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': 'off',
    // enforce variables to be declared either together or separately in functions
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],
    // require or disallow newlines around variable declarations
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],
    // require or disallow assignment operator shorthand where possible
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],
    // enforce consistent linebreak style for operators
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', {overrides: {'=': 'none'}}],
    // require or disallow padding within blocks
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never'],
    // require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',
    // disallow the use of `Math.pow` in favor of the `**` operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'off',
    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',
    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'as-needed'],
    // enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/rules/quotes
    quotes: ['error', 'single', {avoidEscape: true}],
    // require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    semi: ['error', 'always'],
    // enforce consistent spacing before and after semicolons
    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['error', {before: false, after: true}],
    // enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],
    // require object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': 'off',
    // require variables within the same declaration block to be sorted
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',
    // enforce consistent spacing before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',
    // enforce consistent spacing before `function` definition opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', 'never'],
    // enforce consistent spacing inside parentheses
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],
    // require spacing around infix operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',
    // enforce consistent spacing before or after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': 'error',
    // enforce consistent spacing after the `//` or `/*` in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['*', '-', '+', '='],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    // enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': 'error',
    // require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'always'],
    // require or disallow Unicode byte order mark (BOM)
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': 'error',
    // require parenthesis around regex literals
    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',
  },
};
