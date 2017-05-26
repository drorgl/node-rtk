#include "satsys_return.h"

std::vector<std::shared_ptr<overload_info>> satsys_return::_definition = {
	make_param("prn_slot","Number") ,
	make_param("sys","Number")
};


bool satsys_return::verify(overres::type_system * ovres, v8::Local<v8::Value> obj) {
	return ovres->verifyObject(satsys_return::_definition, obj);
}

bool satsys_return::parse(v8::Local<v8::Value> obj) {
	this->prn_slot = overres::type_system::GetFromObject(obj, "prn_slot").ToLocalChecked()->IntegerValue();
	this->sys = overres::type_system::GetFromObject(obj, "sys").ToLocalChecked()->IntegerValue();

	return true;
}


v8::Local<v8::Value> satsys_return::ToObject() {
	auto retval = Nan::New<v8::Object>();
	retval->Set(Nan::New<v8::String>("prn_slot").ToLocalChecked(), Nan::New(this->prn_slot));
	retval->Set(Nan::New<v8::String>("sys").ToLocalChecked(), Nan::New(this->sys));
	return retval;
}

v8::Local<v8::Object> satsys_return::New() {
	auto a = std::make_shared<satsys_return>();// a;
	return a->ToObject().As<v8::Object>();
}


v8::Local<v8::Object> satsys_return::New(int prn_slot, int sys) {
	auto a = std::make_shared<satsys_return>();// a;
	a->prn_slot = prn_slot;
	a->sys = sys;
	return a->ToObject().As<v8::Object>();
}
