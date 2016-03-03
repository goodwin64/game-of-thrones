describe("Make a war", function() {

	it("W: 10000 hp, A: 8600 hp [conquered the seven kingdom]", function() {
    	assert.equal(gameOfThrones([
		    						"Wildling:1000",
		    						"Stark:out:0",
		    						"Arryn:in:300",
		    						"Greyjoy:in:300",
		    						"Lannister:500",
		    						"Stannis:out:0",
		    						"Tyrell:200",
		    						"Martell:out:300"
    								]), "Wildlings conquered the seven kingdom!"
    				);

  	});

  	it("W: 8600 hp, A: 8600 hp [at house Martell]", function() {
    	assert.equal(gameOfThrones([
		    						"Wildling:860",
		    						"Stark:out:0",
		    						"Arryn:in:300",
		    						"Greyjoy:in:300",
		    						"Lannister:500",
		    						"Stannis:out:0",
		    						"Tyrell:200",
		    						"Martell:out:300"
    								]), "Wildlings were stopped at house Martell!"
    				);

  	});

  	it("W: 8600 hp, A: 10000+3600+5000 hp [at house Stark]", function() {
    	assert.equal(gameOfThrones([
		    						"Wildling:860",
		    						"Stark:out:2000",
		    						"Arryn:in:300",
		    						"Greyjoy:in:300",
		    						"Lannister:500",
		    						"Stannis:out:0",
		    						"Tyrell:200",
		    						"Martell:out:300"
    								]), "Wildlings were stopped at house Stark!"
    				);

  	});

  	it("W: 8600 hp, A: 3600+5000+2500 hp [at house Lannister]", function() {
    	assert.equal(gameOfThrones([
		    						"Wildling:860",
		    						"Stark:out:0",
		    						"Arryn:in:300",
		    						"Greyjoy:in:300",
		    						"Lannister:1000",
		    						"Stannis:out:0",
		    						"Tyrell:200",
		    						"Martell:out:300"
    								]), "Wildlings were stopped at house Lannister!"
    				);

  	});

  	it("W: 8600 hp, A: 3600+2500+2500+1500 hp [at house Tyrell]", function() {
    	assert.equal(gameOfThrones([
		    						"Wildling:860",
		    						"Stark:out:0",
		    						"Arryn:in:300",
		    						"Greyjoy:in:300",
		    						"Lannister:500",
		    						"Stannis:out:0",
		    						"Tyrell:500",
		    						"Martell:out:300"
    								]), "Wildlings were stopped at house Tyrell!"
    				);

  	});

  	it("W: 3000 hp, A: 3600 hp [Alliance won]", function() {
    	assert.equal(gameOfThrones([
		    						"Wildling:300",
		    						"Stark:out:0",
		    						"Arryn:in:300",
		    						"Greyjoy:in:300",
		    						"Lannister:0",
		    						"Stannis:out:0",
		    						"Tyrell:0",
		    						"Martell:out:0"
    								]), "Alliance won!"
    				);

  	});
});
