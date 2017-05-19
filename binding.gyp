{
	'target_defaults': {

		'configurations': {
			'Debug' : {
				
				'conditions':[
					['1==1',{
						'msvs_settings': {
							# This magical incantation is necessary because VC++ will compile
							# object files to same directory... even if they have the same name!
							'VCCLCompilerTool': {
							  'AdditionalOptions': ['/bigobj'],	
							  'WholeProgramOptimization' : 'false',
							  #'AdditionalOptions': ['/w'], #['/wd4244' ,'/wd4018','/wd4133' ,'/wd4090'] #GL- was added because the forced optimization coming from node-gyp is disturbing the weird coding style from ffmpeg
							  'RuntimeLibrary': 3, # dll debug BUILD_WITH_STATIC_CRT
							  'ExceptionHandling' : 1 #/EHsc
							},
							'VCLinkerTool': {
							  'LinkTimeCodeGeneration': '0',
							},
							
							'VCLibrarianTool': {
								'AdditionalOptions!': ['/LTCG'],
								'AdditionalOptions': ['/LTCG'],
							 },
						}
				}]
				]
			},
			'Release' : {
				'conditions':[
					['1==1',{
						'msvs_settings': {
							# This magical incantation is necessary because VC++ will compile
							# object files to same directory... even if they have the same name!
							'VCCLCompilerTool': {
							  'AdditionalOptions': ['/bigobj'],
							  'WholeProgramOptimization' : 'false',
							   #'AdditionalOptions': ['/w'], #['/wd4244' ,'/wd4018','/wd4133' ,'/wd4090'] #GL- was added because the forced optimization coming from node-gyp is disturbing the weird coding style from ffmpeg
							  'RuntimeLibrary': 2, # dll release BUILD_WITH_STATIC_CRT
							  'ExceptionHandling' : 1 #/EHsc
							},
							'VCLinkerTool': {
							  'LinkTimeCodeGeneration': '0',
							},
							
							'VCLibrarianTool': {
								'AdditionalOptions!': ['/LTCG'],
								'AdditionalOptions': ['/LTCG'],
							 },
						}
				}]
				]
			},
		}
	},

  "targets": [{
      "target_name": "rtklib"
	  , "defines":[
		  "ENAGLO",
		  "ENAGAL",
		  "ENAQZS",
		  "ENACMP",
		  "ENAIRN",
		  "ENALEO"
	  ]
      , "sources": [
		 "binding.gyp"
		
		,"src/RTKLIB/src/convgpx.c"
		,"src/RTKLIB/src/convkml.c"
		,"src/RTKLIB/src/convrnx.c"
		,"src/RTKLIB/src/datum.c"
		,"src/RTKLIB/src/download.c"
		,"src/RTKLIB/src/ephemeris.c"
		,"src/RTKLIB/src/geoid.c"
		,"src/RTKLIB/src/gis.c"
		,"src/RTKLIB/src/ionex.c"
		,"src/RTKLIB/src/lambda.c"
		,"src/RTKLIB/src/options.c"
		,"src/RTKLIB/src/pntpos.c"
		,"src/RTKLIB/src/postpos.c"
		,"src/RTKLIB/src/ppp.c"
		,"src/RTKLIB/src/ppp_ar.c"
		,"src/RTKLIB/src/ppp_corr.c"
		,"src/RTKLIB/src/preceph.c"
		,"src/RTKLIB/src/qzslex.c"
		,"src/RTKLIB/src/rcvraw.c"
		,"src/RTKLIB/src/rinex.c"
		,"src/RTKLIB/src/rtcm.c"
		,"src/RTKLIB/src/rtcm2.c"
		,"src/RTKLIB/src/rtcm3.c"
		,"src/RTKLIB/src/rtcm3e.c"
		,"src/RTKLIB/src/rtkcmn.c"
		,"src/RTKLIB/src/rtklib.h"
		,"src/RTKLIB/src/rtkpos.c"
		,"src/RTKLIB/src/rtksvr.c"
		,"src/RTKLIB/src/sbas.c"
		,"src/RTKLIB/src/solution.c"
		,"src/RTKLIB/src/src.pro"
		,"src/RTKLIB/src/stream.c"
		,"src/RTKLIB/src/streamsvr.c"
		,"src/RTKLIB/src/tides.c"
		,"src/RTKLIB/src/tle.c"
		,"src/RTKLIB/src/rcv/binex.c"
		,"src/RTKLIB/src/rcv/cmr.c"
		,"src/RTKLIB/src/rcv/crescent.c"
		,"src/RTKLIB/src/rcv/gw10.c"
		,"src/RTKLIB/src/rcv/javad.c"
		,"src/RTKLIB/src/rcv/novatel.c"
		,"src/RTKLIB/src/rcv/nvs.c"
		,"src/RTKLIB/src/rcv/rcvlex.c"
		,"src/RTKLIB/src/rcv/rt17.c"
		,"src/RTKLIB/src/rcv/septentrio.c"
		,"src/RTKLIB/src/rcv/skytraq.c"
		,"src/RTKLIB/src/rcv/ss2.c"
		,"src/RTKLIB/src/rcv/ublox.c"

		,"src/rtk_dummy.c"

		,"src/rtk.h"
		,"src/init.cc"
		,"src/binding_rtkcmn.cc"
		,"src/binding_rtkcmn.h"
        ]
	  , 'dependencies':[
			#'../ffmpeg/ffmpeg.gyp:swscale',
			"<!(node -e \"require('node-addon-tracer')\"):node-addon-tracer",
			"<!(node -e \"require('node-overload-resolution')\"):node-overload-resolution",
	  ]
      ,'include_dirs': [
		  "src/RTKLIB/src",
			"<!(node -e \"require('nan')\")"
		]
		
      , "conditions": [
		['OS == "win"',{
			'libraries':[
				'dbghelp.lib',
				'ws2_32',
				'winmm.lib'
			],
		}],
		['OS in "linux android"',{
			'cflags':['-fexceptions','-std=c++11'],
			'cflags!' : [ '-fno-exceptions'],
			'cflags_cc!': [ '-fno-rtti',  '-fno-exceptions'],
		}],
    ]
  }]
}
