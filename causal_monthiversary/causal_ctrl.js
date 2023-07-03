
/*********************************
*    Preset global variables    *
**********************************/

//GLOBAL VARIABLES
var mycounterbalance = Math.floor(Math.random() * 16) + 1; //have 16 subjects' story version left to collect causal rating on 

// set route_vector and choice_vector variables
if (mycounterbalance == 1) {
  var route_subject= "sub100_4100"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_b79B1Z7Kbmq2W3k' 
} else if (mycounterbalance == 2) {
  var route_subject= "sub10_4010"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_br6wLMaMwdh40No' 
} else if (mycounterbalance == 3) {
  var route_subject= "sub14_4014"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_8BVU73QEu3zipBI' 
} else if (mycounterbalance == 4) {
  var route_subject= "sub19_4019"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_8dMqVvfDykD4roW' 
} else if (mycounterbalance == 5) {
  var route_subject= "sub23_4023"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_1Z9F8IbnzLpBXU2' 
} else if (mycounterbalance == 6) {
  var route_subject= "sub25_4025"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_cNjF8hkbuGRZFae' 
} else if (mycounterbalance == 7) {
  var route_subject= "sub37_4037"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_elKTMmDbx54LHYG' 
} else if (mycounterbalance == 8) {
  var route_subject= "sub40_4040"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_9FbZiWdV03lBfAa' 
} else if (mycounterbalance == 9) {
  var route_subject= "sub50_4050"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_8dE4yEvkIApNE8K' 
} else if (mycounterbalance == 10) {
  var route_subject= "sub71_4071"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_em5EiZsHWrXkTQy' 
} else if (mycounterbalance == 11) {
  var route_subject= "sub79_4079"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_4TP3B7LzEhJlo1w' 
} else if (mycounterbalance == 12) {
  var route_subject= "sub80_4080"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_bf659ec6DXBVFrM' 
} else if (mycounterbalance == 13) {
  var route_subject= "sub81_4081"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_0cBENnmw64LSRls' 
} else if (mycounterbalance == 14) {
  var route_subject= "sub90_4090"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_eQj6K6SqXvixQTI' 
} else if (mycounterbalance == 15) {
  var route_subject= "sub94_4094"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_6u0oFxKFKQ78RQG' 
} else if (mycounterbalance == 16) {
  var route_subject= "sub95_4095"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_e8V6rOaB5lTo5CK' 
};


function assign_story(){
  window.location=link
}

