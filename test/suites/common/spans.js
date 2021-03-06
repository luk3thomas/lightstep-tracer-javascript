it("should record a trace GUID with every span");

it("should capture parent span guids", function () {

    var parent = Tracer.startSpan("A");
    var child = Tracer.startSpan("B", { parent : parent });
    child.finish();
    parent.finish();

    expect(parent.imp().guid()).not.to.be.undefined;
    expect(parent.imp().parentGUID()).to.be.falsey;

    expect(child.imp().guid()).not.to.be.undefined;
    expect(child.imp().parentGUID()).to.equal(parent.imp().guid());
});

it("should emit a 'span_added' event when each span ends", function() {
    var count = 0;
    var onSpan = function (record) {
        count++;
    };

    Tracer.imp().on('span_added', onSpan);
    var s = Tracer.startSpan("test");
    expect(count).to.equal(0);
    s.finish();
    expect(count).to.equal(1);
    s = Tracer.startSpan("test");
    expect(count).to.equal(1);
    s.finish();
    expect(count).to.equal(2);

    Tracer.imp().removeListener('span_added', onSpan);
    s = Tracer.startSpan("test");
    expect(count).to.equal(2);
    s.finish();
    expect(count).to.equal(2);
});

it("should handle inject / join to split text carriers correctly" , function() {
    var span = Tracer.startSpan('my_span');
    span.setBaggageItem('footwear', 'sandals');
    span.setBaggageItem('creditcard', 'visa');

    var carrier = new Tracer.SplitTextCarrier();
    Tracer.inject(span, Tracer.FORMAT_SPLIT_TEXT, carrier);

    expect(carrier.tracerState['ot-tracer-traceid']).to.equal(span.imp().traceGUID());
    expect(carrier.tracerState['ot-tracer-spanid']).to.equal(span.imp().guid());
    expect(carrier.baggage['ot-baggage-footwear']).to.equal('sandals');
    expect(carrier.baggage['ot-baggage-creditcard']).to.equal('visa');

    var naps = Tracer.join('naps_ym', Tracer.FORMAT_SPLIT_TEXT, carrier);
    expect(naps.imp().parentGUID()).to.equal(span.imp().guid());
    expect(naps.getBaggageItem('footwear')).to.equal('sandals');
    expect(naps.getBaggageItem('creditcard')).to.equal('visa');
});

it("should handle inject / join to binary carriers correctly" , function() {
    var span = Tracer.startSpan('my_span');
    span.setBaggageItem('footwear', 'sandals');
    span.setBaggageItem('creditcard', 'visa');

    var carrier = new Tracer.BinaryCarrier();
    Tracer.inject(span, Tracer.FORMAT_SPLIT_BINARY, carrier);

    var naps = Tracer.join('naps_ym', Tracer.FORMAT_SPLIT_BINARY, carrier);
    expect(naps.imp().parentGUID()).to.equal(span.imp().guid());
    expect(naps.getBaggageItem('footwear')).to.equal('sandals');
    expect(naps.getBaggageItem('creditcard')).to.equal('visa');
});
