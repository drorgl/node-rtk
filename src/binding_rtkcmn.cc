#include "binding_rtkcmn.h"

namespace rtkcmn_general_callback {
	std::shared_ptr<overload_resolution> overload;
	NAN_METHOD(callback) {
		if (overload == nullptr) {
			throw std::runtime_error("rtkcmn_general_callback is empty");
		}
		return overload->execute("rtkcmn", info);
	}
}


 void rtkcmn::Init(Handle<Object> target, std::shared_ptr<overload_resolution> overload){
	 rtkcmn_general_callback::overload = overload;

     overload->addOverload("rtkcmn", "", "satno", {
		  make_param<int>("sys","int"),
		  make_param<int>("prn","int")
	}, _satno);
	 Nan::SetMethod(target, "satno", rtkcmn_general_callback::callback);
 }

POLY_METHOD(rtkcmn::_satno){
	 auto sys  = info.at<int>(0);
	 auto prn = info.at<int>(1);
	 auto ret = satno(sys, prn);
	 info.SetReturnValue(ret);
}