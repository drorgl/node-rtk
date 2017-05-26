#ifndef _NODE_RTKCMN_H_
#define _NODE_RTKCMN_H_

#include <overload_resolution.h>
#include "rtk.h"

class rtkcmn  {
public:
	static void Init(std::shared_ptr<namespace_wrap> overload);

	static POLY_METHOD(_satno);
	static POLY_METHOD(_satsys	  );
	static POLY_METHOD(_satid2no  );
	static POLY_METHOD(_satno2id  );
	static POLY_METHOD(_obs2code  );
	static POLY_METHOD(_code2obs  );
	static POLY_METHOD(_satexclude);
	static POLY_METHOD(_testsnr	  );
	static POLY_METHOD(_setcodepri);
	static POLY_METHOD(_getcodepri);

};

#endif