/**
 * This file created by ./bin/gen_types
 * Do not modify this file!!!!!!!!!
 */

import ustring from '../ustring';
import buffer from '../buffer';
import ACL from '../data/ACL';
import vector from '../vector';
import int from '../int';

import RequestRecord from '../basic/RequestRecord';

type ParamValue = {
  path?: ustring | string;
  data?: buffer | Buffer;
  acl?: vector<ACL> | Array<ACL>;
  flags?: int | number;
};

type Value = {
  path: ustring;
  data: buffer;
  acl: vector<ACL>;
  flags: int;
};

export default class CreateRequest extends RequestRecord {
  private _value: Value;

  constructor(value: ParamValue = {}) {
    const newValue = {
      path: new ustring(value.path),
      data: new buffer(value.data),
      acl: new vector(value.acl, ACL),
      flags: new int(value.flags),
    };

    super([
      { name: 'path', value: newValue.path },
      { name: 'data', value: newValue.data },
      { name: 'acl', value: newValue.acl },
      { name: 'flags', value: newValue.flags },
    ]);

    this._value = newValue;
  }

  get path() {
    return this._value.path.valueOf();
  }

  set path(value) {
    this._value.path.setValue(value);
  }

  get data() {
    return this._value.data.valueOf();
  }

  set data(value) {
    this._value.data.setValue(value);
  }

  get acl() {
    return this._value.acl.valueOf();
  }

  set acl(value) {
    this._value.acl.setValue(value);
  }

  get flags() {
    return this._value.flags.valueOf();
  }

  set flags(value) {
    this._value.flags.setValue(value);
  }

  setValue(value: ParamValue = {}) {
    super.setValue(value);
  }

  valueOf() {
    return {
      path: this.path,
      data: this.data,
      acl: this.acl,
      flags: this.flags,
    };
  }

}
