#include "rtk.h"

#include <tracer.h>

#include "binding_rtkcmn.h"
#include "returns/satsys_return.h"


std::shared_ptr<overload_resolution> overload;
std::shared_ptr<namespace_wrap> module;

extern "C" {
void init(Handle<Object> target)
{
    //assert(false);
    tracer::Init(target);

    overload = std::make_shared<overload_resolution>();
	module = overload->register_module(target);
	overload->add_type_alias("int", "Number");
	overload->register_type<satsys_return>("", "satsys_return");

    //Register

	rtkcmn::Init(module);

    target->Set(Nan::New("version").ToLocalChecked(), Nan::New("1.0.0").ToLocalChecked());

    //validate type/overload registrations
    assert(overload->validate_type_registrations());
};
}

NODE_MODULE(rtk, init)
