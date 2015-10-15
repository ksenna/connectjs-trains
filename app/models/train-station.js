import DS from 'ember-data';

export default DS.Model.extend({
  trains: DS.hasMany('train', { async: true })
});
