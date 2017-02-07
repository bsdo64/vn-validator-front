/**
 * Created by dobyeongsu on 2017. 2. 7..
 */
const Ajv = require('ajv');
const { collapseWhitespace } = require('strman');

const ajv = new Ajv({
  useDefaults: true
}); // options can be passed, e.g. {allErrors: true}

const schema = {
  type: 'object',
  properties: {
    de: { type: 'string', default: '3' },
    strings: { type: 'string' },
    test: { type: 'number' },
  }
};

const data = {
  test: 1,
  strings: collapseWhitespace(1)
};

const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {

  console.log(validate.errors);

}

console.log(data);