const _ = require('lodash');

const isArrayOfObjects = arr => _.isArray(arr) && _.every(arr, item => _.isPlainObject(item));

function normalizeCamelCaseProps(obj) {
  const camelCaseProps = _.keys(obj);

  return _.reduce(
    camelCaseProps,
    (normalizedObj, key) => {
      const val = obj[key];
      const camelCaseKey = _.camelCase(key);

      if (_.isObject(val)) {
        normalizedObj[camelCaseKey] = isArrayOfObjects(val)
          ? val.map(normalizeCamelCaseProps)
          : normalizeCamelCaseProps(val);
      } else {
        normalizedObj[camelCaseKey] = val;
      }

      return normalizedObj;
    },
    {}
  );
}

module.exports = normalizeCamelCaseProps;
