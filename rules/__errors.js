// TODO:
module.exports = {
  rules: {
    // enforce "for" loop update clause moving the counter in the right direction.
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'off',
    // enforce `return` statements in getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': 'off',
    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'off',
    // disallow `await` inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'off',
    // disallow comparing against -0
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'off',
    // disallow assignment operators in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': 'off',
    // disallow the use of `console`
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',
    // disallow constant expressions in conditions
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'off',
    // disallow control characters in regular expressions
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'off',
    // disallow the use of `debugger`
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'off',
    // disallow duplicate arguments in `function` definitions
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'off',
    // disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'off',
    // disallow duplicate keys in object literals
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'off',
    // disallow duplicate case labels
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'off',
    // disallow empty block statements
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'off',
    // disallow empty character classes in regular expressions
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'off',
    // disallow reassigning exceptions in `catch` clauses
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'off',
    // disallow unnecessary boolean casts
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'off',
    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': 'off',
    // disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'off',
    // disallow reassigning `function` declarations
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'off',
    // disallow assigning to imported bindings
    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'off',
    // disallow variable or `function` declarations in nested blocks
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'off',
    // disallow invalid regular expression strings in `RegExp` constructors
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'off',
    // disallow irregular whitespace
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'off',
    // disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'off',
    // disallow calling global object properties as functions
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'off',
    // disallow calling some `Object.prototype` methods directly on objects
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // disallow multiple spaces in regular expressions
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'off',
    // disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'off',
    // disallow sparse arrays
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'off',
    // disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'off',
    // disallow confusing multiline expressions
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'off',
    // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'off',
    // disallow control flow statements in `finally` blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'off',
    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'off',
    // disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': 'off',
    // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'off',
    // require calls to `isNaN()` when checking for `NaN`
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'off',
    // enforce comparing `typeof` expressions against valid strings
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 'off',
  },
};
