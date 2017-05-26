#include "binding_rtkcmn.h"

#include "returns/satsys_return.h"

 void rtkcmn::Init(std::shared_ptr<namespace_wrap> overload){

     overload->add_overload("satno", {
		  make_param<int>("sys","int"),
		  make_param<int>("prn","int")
	}, _satno);

	 overload->add_overload("satsys", {
		 make_param<int>("sys","int"),
	 }, _satsys);

	 overload->add_overload("satid2no", {
		 make_param<std::string>("id","String"),
	 }, _satid2no);

	 overload->add_overload("satno2id", {
		 make_param<int>("sat","int"),
	 }, _satno2id);
 }

POLY_METHOD(rtkcmn::_satno){
	 auto sys  = info.at<int>(0);
	 auto prn = info.at<int>(1);
	 auto ret = satno(sys, prn);
	 info.SetReturnValue(ret);
}

POLY_METHOD(rtkcmn::_satsys) {
	auto sat = info.at<int>(0);
	int prn;
	auto sys = satsys(sat, &prn);

	auto ret = std::make_shared<satsys_return>();
	ret->prn_slot = prn;
	ret->sys = sys;

	info.SetReturnValue(ret);
}

POLY_METHOD(rtkcmn::_satid2no) {
	auto id = info.at<std::string>(0);
	auto ret = satid2no(id.c_str());
	info.SetReturnValue(ret);
}

POLY_METHOD(rtkcmn::_satno2id) {
	auto sat = info.at<int>(0);

	char id[32];

	satno2id(sat, id);

	info.SetReturnValue(std::string(id));
}

POLY_METHOD(rtkcmn::_obs2code) {
}

POLY_METHOD(rtkcmn::_code2obs) {
}

POLY_METHOD(rtkcmn::_satexclude) {
}

POLY_METHOD(rtkcmn::_testsnr){
}

POLY_METHOD(rtkcmn::_setcodepri) {
}

POLY_METHOD(rtkcmn::_getcodepri) {
}
