#ifndef _NODE_SATSYS_RETURN_H_
#define _NODE_SATSYS_RETURN_H_

#include <overload_resolution.h>

struct satsys_return : public IStructuredObject {
private:
	static std::vector<std::shared_ptr<overload_info>> _definition;

public:
	int prn_slot;
	int sys;

	virtual bool verify(overres::type_system * ovres, v8::Local<v8::Value> obj);
	virtual bool parse(v8::Local<v8::Value> obj);

	v8::Local<v8::Value> ToObject();

	static v8::Local<v8::Object> New();
	static v8::Local<v8::Object> New(int prn_slot, int sys);

	virtual ~satsys_return() {}

};

#endif