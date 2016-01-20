<hello-form>
  <form onsubmit={sayHello}>
    <input type="text" name="greet">
    <button>Say Hello</button>
  </form>
  <h2>Hello {this.greeting}</h2>
  <script>
    this.sayHello = function() {
      this.greeting = this.greet.value
      this.greet.value = ''
    }
  </script>
</hello-form>
