var _0x5c01=['index','recovered','map','top','length','numeric','height','#2DCE99','nearest','https://pomber.github.io/covid19/timeseries.json','getElementById','Confirmed','transparent','Spain','DateTimeFormat','date','#6456FF','#F5385A','spain_timeseries','deaths','2-digit','slice','ajax','json','formatToParts','Death','#F7F8FC','max'];(function(_0x50c3ac,_0x5c01f3){var _0x565a96=function(_0x1b77f3){while(--_0x1b77f3){_0x50c3ac['push'](_0x50c3ac['shift']());}};_0x565a96(++_0x5c01f3);}(_0x5c01,0x1b7));var _0x565a=function(_0x50c3ac,_0x5c01f3){_0x50c3ac=_0x50c3ac-0x0;var _0x565a96=_0x5c01[_0x50c3ac];return _0x565a96;};$(function(){$[_0x565a('0x3')]({'type':'GET','url':_0x565a('0x12'),'dataType':_0x565a('0x4'),'success':function(_0x1b280a){var _0x54bbb3=_0x1b280a[_0x565a('0x16')][_0x565a('0x2')](Math[_0x565a('0x8')](_0x1b280a[_0x565a('0x16')][_0x565a('0xd')]-0x1e,0x1))['map'](_0x42668d=>_0x42668d['confirmed']);var _0x272ad4=_0x1b280a[_0x565a('0x16')][_0x565a('0x2')](Math[_0x565a('0x8')](_0x1b280a[_0x565a('0x16')]['length']-0x1e,0x1))[_0x565a('0xb')](_0x5919b9=>_0x5919b9[_0x565a('0x0')]);var _0x5db46d=_0x1b280a[_0x565a('0x16')][_0x565a('0x2')](Math[_0x565a('0x8')](_0x1b280a[_0x565a('0x16')]['length']-0x1e,0x1))[_0x565a('0xb')](_0x150868=>_0x150868[_0x565a('0xa')]);var _0x2848dc=_0x1b280a['Spain'][_0x565a('0x2')](Math[_0x565a('0x8')](_0x1b280a[_0x565a('0x16')][_0x565a('0xd')]-0x1e,0x1))[_0x565a('0xb')](function(_0x2eb5e1){const _0x5ad1dd=new Date(_0x2eb5e1[_0x565a('0x18')]);const _0xb91680=new Intl[(_0x565a('0x17'))]('en',{'year':_0x565a('0xe'),'month':'short','day':_0x565a('0x1')});const [{value:_0xb5b19b},,{value:_0x277abd}]=_0xb91680[_0x565a('0x5')](_0x5ad1dd);return _0x277abd+'-'+_0xb5b19b;});var _0xf053bf=document[_0x565a('0x13')](_0x565a('0x1b'));_0xf053bf[_0x565a('0xf')]=0x64;new Chart(_0xf053bf,{'type':'line','data':{'labels':_0x2848dc,'datasets':[{'label':_0x565a('0x14'),'borderColor':'#6456FF','borderWidth':'2','backgroundColor':'transparent','pointBackgroundColor':_0x565a('0x19'),'data':_0x54bbb3},{'label':_0x565a('0x6'),'borderColor':_0x565a('0x1a'),'borderWidth':'2','backgroundColor':'transparent','pointBackgroundColor':_0x565a('0x1a'),'data':_0x272ad4},{'label':'Recovered','borderColor':_0x565a('0x10'),'borderWidth':'2','backgroundColor':_0x565a('0x15'),'pointBackgroundColor':'#2DCE99','data':_0x5db46d}]},'options':{'responsive':!![],'maintainAspectRatio':![],'legend':{'display':!![],'position':_0x565a('0xc'),'labels':{'usePointStyle':!![]}},'tooltips':{'mode':_0x565a('0x9'),'intersect':![]},'hover':{'mode':_0x565a('0x11'),'intersect':!![]},'scales':{'xAxes':[{'display':!![],'gridLines':{'display':!![],'drawBorder':![],'color':_0x565a('0x7')},'scaleLabel':{'display':![],'labelString':'Month'}}],'yAxes':[{'display':!![],'gridLines':{'display':!![],'drawBorder':![],'color':'#F7F8FC'},'scaleLabel':{'display':!![],'labelString':'Value'}}]}}});}});});