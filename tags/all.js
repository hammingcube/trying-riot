riot.tag2('hello-form', '<form onsubmit="{sayHello}"> <input type="text" name="greet"> <button>Say Hello</button> </form> <h2>Hello {this.greeting}</h2>', '', '', function(opts) {
    this.sayHello = function() {
      this.greeting = this.greet.value
      this.greet.value = ''
    }
}, '{ }');

riot.tag2('hello-world', '<h2>Hello {opts.greet}</h2>', '', '', function(opts) {
}, '{ }');
