#ifndef _NODE_RTKCMN_H_
#define _NODE_RTKCMN_H_

#include "rtk.h"

class rtkcmn  {
public:
	static void Init(Handle<Object> target, std::shared_ptr<overload_resolution> overload);

	static POLY_METHOD(_satno);
};

#endif