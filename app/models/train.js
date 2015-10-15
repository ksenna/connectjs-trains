import DS from 'ember-data';

export default DS.Model.extend({
  stationOrigin: DS.attr(),
  manufacturer: DS.attr(),
  manufacturerModel: DS.attr(),
  trainStation: DS.belongsTo('train-station', { async: true }),

  trainName: function() {
    return this.get('manufacturer') + this.get('manufacturerModel');
  }.property()
});
