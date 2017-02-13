//import  comp from "./../src/components/vuejs/app-component/vueTest.vue";
describe("Alert component", function() {

    var c = require('./../src/components/vuejs/app-component/vueTest.vue');


    var a;
    it("should and so is a spec", function() {
        a = true;
        expect(a).toBe(true);
    });


    it('should have data', function () {
        expect(typeof c.data).toBe('function');
    });

    //it('should be visible', function () {
    //    var defaultData = c.data();
    //    //console.log("defaultData = ", defaultData);
    //    expect(defaultData.msg).toBe(true);
    //});

});