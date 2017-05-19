#include "rtk.h"

#include <tracer.h>

#include "binding_rtkcmn.h"


extern "C" {
void init(Handle<Object> target)
{
    //assert(false);
    tracer::Init(target);

    auto overload = std::make_shared<overload_resolution>();
	overload->add_type_alias("int", "Number");

    //Register

	rtkcmn::Init(target, overload);

    target->Set(Nan::New("version").ToLocalChecked(), Nan::New("1.0.0").ToLocalChecked());

    //validate type/overload registrations
    assert(overload->validate_type_registrations());
};
}

NODE_MODULE(rtk, init)
