'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DbRecordSchema = new Schema({
    DeviceSerialNumber:  String,
    DeviceId: Number,
    DeviceEquipmentNumber:   String,
    DeviceType:  String,
    OperationPauses: [{ PauseStart: Date, PauseEnd: Date }],

    OperationStart: Date,
    OperationEnd: Date,
    OperationDuration: Number, //In MS
    Sev:{Intake: Number,Uptake:Number,Efficiency:Number},
    Des:{Intake: Number,Uptake:Number,Efficiency:Number},
    Iso:{Intake: Number,Uptake:Number,Efficiency:Number},

    
  });
  
  module.exports = mongoose.model('OperationRecord', DbRecordSchema);
