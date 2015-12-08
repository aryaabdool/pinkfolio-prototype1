$(document).ready(function(){


// Javascript/ko for assessment
var Category = function (name, context) {
    var self = this;
    this.name = ko.observable(name);
    this.selected = ko.observable(false);
    this.subcategories = ko.observableArray();

    this.toggle = function () {
        self.selected(!self.selected());
    };

    this.show = ko.computed(function () {
        return context.page() ==1 || (context.page()==2 && self.selected()) || anyChildSelected();
    });

    var anyChildSelected = function () {
        var any = ko.utils.arrayFirst(self.subcategories(), function (subcat) {
            return subcat.selected();
        });
        return any != null;
    };

};

var SubCategory = function (name, context) {
    var self = this;
    this.name = ko.observable(name);
    this.selected = ko.observable(false);

    this.toggle = function () {
        self.selected(!self.selected());
    };

    this.show = ko.computed(function () {
        return context.page() == 2 || (context.page() > 2 && self.selected());
    });
};

var ViewModel = function () {
    var self = this;
    this.page = ko.observable(1);

    this.categories = ko.observableArray();
    
    //here
    category = new Category("Spend Smart & Save More", this);
    category.subcategories.push(new SubCategory("Saving can be painless", this));
    category.subcategories.push(new SubCategory("Cut thoughtless spending", this));
    category.subcategories.push(new SubCategory("Stay chic on a budget", this));
    category.subcategories.push(new SubCategory("stay fit without overspending", this));
    category.subcategories.push(new SubCategory("Have an affordable social life", this));
    category.subcategories.push(new SubCategory("Saving on transportation", this));
    category.subcategories.push(new SubCategory("Enjoy fun & reasonable travel", this));

    this.categories.push(category);
    // to here

    //here
    category = new Category("Debt & Credit", this);
    category.subcategories.push(new SubCategory("Spend less & pay back aggressively", this));
    category.subcategories.push(new SubCategory("Plan to pay back debt", this));
    category.subcategories.push(new SubCategory("Negotiate your debts", this));
    category.subcategories.push(new SubCategory("Establish a good credit score", this));
    category.subcategories.push(new SubCategory("Understand your credit options", this));
    this.categories.push(category);
    // to here

    //here
    category = new Category("Grow Wealth for the Future", this);
    category.subcategories.push(new SubCategory("When should I start? Assess yourself", this));
    category.subcategories.push(new SubCategory("Guide for beginners", this));
    category.subcategories.push(new SubCategory("Understand key concepts", this));
    category.subcategories.push(new SubCategory("Choose investment strategy", this));
    category.subcategories.push(new SubCategory("Other types of investment", this));
    category.subcategories.push(new SubCategory("Manage investment", this));
    this.categories.push(category);
    // to here

	//here
    category = new Category("Grow Professionally", this);
    category.subcategories.push(new SubCategory("Understand what your job offers", this));
    category.subcategories.push(new SubCategory("Negotiate your compensation", this));
    category.subcategories.push(new SubCategory("Create other sources of income", this));
    category.subcategories.push(new SubCategory("Thrive as a freelancer", this));
    category.subcategories.push(new SubCategory("Start a business", this));
    category.subcategories.push(new SubCategory("Self-development for career advances", this));
    category.subcategories.push(new SubCategory("When it's worth paying for further education", this));
    this.categories.push(category);
    // to here

	//here
    category = new Category("Prepare for emergencies", this);
    category.subcategories.push(new SubCategory("Create an emergency fund", this));
    category.subcategories.push(new SubCategory("Understanding insurance", this));
    category.subcategories.push(new SubCategory("Job loss", this));
    category.subcategories.push(new SubCategory("Medical emergencies", this));
    category.subcategories.push(new SubCategory("Funding major repairs", this));
    this.categories.push(category);
    // to here

    //here
    category = new Category("Relationship & Family", this);
    category.subcategories.push(new SubCategory("Moving out", this));
    category.subcategories.push(new SubCategory("Living as a couple", this));
    category.subcategories.push(new SubCategory("Getting married", this));
    category.subcategories.push(new SubCategory("Having a child", this));
    category.subcategories.push(new SubCategory("Getting separated", this));
    category.subcategories.push(new SubCategory("Living with a disability", this));
    category.subcategories.push(new SubCategory("Receive inheritance", this));
    this.categories.push(category);
    // to here



    this.nextPage = function () {
        self.page(self.page() + 1);
    };
    this.prevPage = function () {
        self.page(self.page() - 1);
    };

    this.donePage = function () {
    	self.page(self.page() + 1)
    };

    // this.doneMsg = function() {
    // 	alert("your finance is all good");
    // }


    this.headerText = ko.computed(function() {
    	return {
    		1: "What's your priority?",
    		2: "Specific interests? ",
    		3: "Your Learning Path",
    		4: "Your Learning Path", 
    	}[self.page()];
    });

    this.header
};

ko.applyBindings(new ViewModel());


});
