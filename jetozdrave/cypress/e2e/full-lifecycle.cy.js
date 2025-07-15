describe("JeToZdrave - Full Lifecycle Test", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should complete the full nutrition calculation workflow", () => {
        cy.log("🚀 Starting full lifecycle test");

        cy.url().should("include", "/jetozdrave/table");
        cy.get("h2").should("contain", "Enter Product Details");

        cy.log("🔍 Testing form validation");

        cy.get("button").contains("Continue").click();
        cy.get('[data-testid="error-message"]', { timeout: 1000 }).should(
            "be.visible"
        );
        cy.get('[data-testid="error-message"]').should(
            "contain",
            "Please fill in all fields"
        );

        cy.log("📝 Filling product details form");

        const productData = {
            kcals: "250",
            fats: "8.5",
            carbs: "35",
            sugars: "12",
            fibers: "3.2",
            proteins: "15",
        };

        cy.get('input[name="kcals"]').clear().type(productData.kcals);
        cy.get('input[name="fats"]').clear().type(productData.fats);
        cy.get('input[name="carbs"]').clear().type(productData.carbs);
        cy.get('input[name="sugars"]').clear().type(productData.sugars);
        cy.get('input[name="fibers"]').clear().type(productData.fibers);
        cy.get('input[name="proteins"]').clear().type(productData.proteins);

        cy.get('input[name="kcals"]').should("have.value", productData.kcals);
        cy.get('input[name="fats"]').should("have.value", productData.fats);
        cy.get('input[name="carbs"]').should("have.value", productData.carbs);
        cy.get('input[name="sugars"]').should("have.value", productData.sugars);
        cy.get('input[name="fibers"]').should("have.value", productData.fibers);
        cy.get('input[name="proteins"]').should(
            "have.value",
            productData.proteins
        );

        cy.get("button").contains("Continue").click();

        cy.log("⚖️ Testing weight input page");

        cy.url().should("include", "/jetozdrave/weight");
        cy.get("h2").should("contain", "Enter Product Weight");

        cy.get("button").contains("Show Result").click();

        const weight = "200";
        cy.get('input[type="number"]').clear().type(weight);
        cy.get('input[type="number"]').should("have.value", weight);

        cy.get("button").contains("Show Result").click();

        cy.log("📊 Testing results page");

        cy.url().should("include", "/jetozdrave/result");

        const expectedResults = {
            kcals: (250 * 2).toString(),
            fats: (8.5 * 2).toString(),
            carbs: (35 * 2).toString(),
            sugars: (12 * 2).toString(),
            fibers: (3.2 * 2).toString(),
            proteins: (15 * 2).toString(),
        };

        cy.contains("500").should("be.visible");
        cy.contains("17").should("be.visible");
        cy.contains("70").should("be.visible");
        cy.contains("24").should("be.visible");
        cy.contains("6.4").should("be.visible");
        cy.contains("30").should("be.visible");

        cy.log("🎨 Testing health color indicators");

        cy.get(
            '[class*="excellent"], [class*="good"], [class*="moderate"], [class*="poor"], [class*="bad"]'
        ).should("have.length.greaterThan", 0);

        cy.log("🔄 Testing navigation flows");

        cy.get("body").then(($body) => {
            if ($body.find('button:contains("Calculate Another")').length > 0) {
                cy.get("button").contains("Calculate Another").click();
                cy.url().should("include", "/jetozdrave/table");
            } else if ($body.find('a:contains("back")').length > 0) {
                cy.get("a").contains("back").click();
                cy.url().should("include", "/jetozdrave/table");
            }
        });
    });

    it("should handle edge cases and validation", () => {
        cy.log("🧪 Testing edge cases");

        cy.visit("/table");

        cy.get('input[name="kcals"]').type("0");
        cy.get('input[name="fats"]').type("0");
        cy.get('input[name="carbs"]').type("0");
        cy.get('input[name="sugars"]').type("0");
        cy.get('input[name="fibers"]').type("0");
        cy.get('input[name="proteins"]').type("0");

        cy.get("button").contains("Continue").click();
        cy.url().should("include", "/jetozdrave/weight");

        cy.get('input[type="number"]').type("1");
        cy.get("button").contains("Show Result").click();
        cy.url().should("include", "/jetozdrave/result");
    });

    it("should handle very high nutritional values", () => {
        cy.log("📈 Testing high nutritional values");

        cy.visit("/table");

        cy.get('input[name="kcals"]').type("600");
        cy.get('input[name="fats"]').type("50");
        cy.get('input[name="carbs"]').type("20");
        cy.get('input[name="sugars"]').type("5");
        cy.get('input[name="fibers"]').type("10");
        cy.get('input[name="proteins"]').type("25");

        cy.get("button").contains("Continue").click();
        cy.url().should("include", "/jetozdrave/weight");

        cy.get('input[type="number"]').type("300");
        cy.get("button").contains("Show Result").click();
        cy.url().should("include", "/jetozdrave/result");

        cy.contains("1800").should("be.visible");
    });

    it("should test responsive design elements", () => {
        cy.log("📱 Testing responsive design");

        cy.viewport(375, 667);
        cy.visit("/table");

        cy.get('input[name="kcals"]').should("be.visible").type("200");
        cy.get("button").contains("Continue").should("be.visible");

        cy.viewport(768, 1024);
        cy.get('input[name="kcals"]').should("be.visible");

        cy.viewport(1280, 720);
        cy.get('input[name="kcals"]').should("be.visible");
    });

    it("should test browser back/forward navigation", () => {
        cy.log("⬅️➡️ Testing browser navigation");

        cy.visit("/table");

        cy.get('input[name="kcals"]').type("300");
        cy.get('input[name="fats"]').type("10");
        cy.get('input[name="carbs"]').type("40");
        cy.get('input[name="sugars"]').type("8");
        cy.get('input[name="fibers"]').type("5");
        cy.get('input[name="proteins"]').type("12");

        cy.get("button").contains("Continue").click();
        cy.url().should("include", "/jetozdrave/weight");

        cy.get('input[type="number"]').type("150");
        cy.get("button").contains("Show Result").click();
        cy.url().should("include", "/jetozdrave/result");

        cy.go("back");
        cy.url().should("include", "/jetozdrave/weight");

        cy.go("back");
        cy.url().should("include", "/jetozdrave/table");

        cy.go("forward");
        cy.url().should("include", "/jetozdrave/weight");

        cy.go("forward");
        cy.url().should("include", "/jetozdrave/result");
    });

    it("should test accessibility features", () => {
        cy.log("♿ Testing accessibility");

        cy.visit("/table");

        cy.get('input[name="kcals"]').focus();
        cy.focused().should("have.attr", "name", "kcals");

        cy.get('input[name="kcals"]').focus().clear().type("250");
        cy.get('input[name="kcals"]').should("have.value", "250");

        cy.get('input[name="fats"]').focus().clear().type("10");
        cy.get('input[name="fats"]').should("have.value", "10");

        cy.get('input[name="carbs"]').focus().clear().type("30");
        cy.get('input[name="carbs"]').should("have.value", "30");

        cy.get('input[name="sugars"]').focus().clear().type("5");
        cy.get('input[name="sugars"]').should("have.value", "5");

        cy.get('input[name="fibers"]').focus().clear().type("3");
        cy.get('input[name="fibers"]').should("have.value", "3");

        cy.get('input[name="proteins"]').focus().clear().type("15");
        cy.get('input[name="proteins"]').should("have.value", "15");

        cy.get("button").focus();
        cy.focused().should("contain.text", "Continue");

        cy.get('input[name="kcals"]').should("have.attr", "type", "number");
        cy.get('input[name="fats"]').should("have.attr", "type", "number");
        cy.get('input[name="kcals"]').should("have.attr", "placeholder");
        cy.get('input[name="fats"]').should("have.attr", "placeholder");

        cy.get('input[name="kcals"]').should("have.attr", "tabindex", "1");
        cy.get('input[name="fats"]').should("have.attr", "tabindex", "2");
        cy.get('input[name="carbs"]').should("have.attr", "tabindex", "3");
        cy.get('input[name="sugars"]').should("have.attr", "tabindex", "4");
        cy.get('input[name="fibers"]').should("have.attr", "tabindex", "5");
        cy.get('input[name="proteins"]').should("have.attr", "tabindex", "6");
        cy.get("button").should("have.attr", "tabindex", "7");

        cy.get("button").focus();
        cy.focused().should("contain.text", "Continue");

        cy.get('input[name="proteins"]').focus().type("{enter}");
        cy.url().should("include", "/jetozdrave/weight");
    });
});
