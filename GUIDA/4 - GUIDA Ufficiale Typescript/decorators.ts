//Decoratori di proprietà
function Override(label: string) {
    return function (target: any, key: string) {
      Object.defineProperty(target, key, { 
        configurable: false,
        get: () => label
      });
    }
  }
  
  class Test {
    @Override('test')      // invokes Override, which returns the decorator
    name: string = 'pat';
  }
  
  let t = new Test();
  console.log(t.name);  // 'test'

//Decoratore di classe
  function log(prefix?: string) {
    return (target) => {
      // save a reference to the original constructor
      var original = target;
  
      // a utility function to generate instances of a class
      function construct(constructor, args) {
        var c: any = function () {
          return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
      }
  
      // the new constructor behavior
      var f: any = function (...args) {
        console.log(prefix + original.name);
        return construct(original, args);
      }
  
      // copy prototype so instanceof operator still works
      f.prototype = original.prototype;
  
      // return new constructor (will override original)
      return f;
    };
  }
  
  @log('hello')
  class World {
  }
  
  const w = new World(); // outputs "helloWorld"


//Decoratore di parametro 

//   Questo decoratore non fa altro che
//   riscrivere il costruttore per stampare a  console il parametro passato con il nome della classe.
//   Decoratore di parametro
  function logPosition(target: any, propertyKey: string, parameterIndex: number) {
    console.log(parameterIndex);
  }
   
  class Cow {
    say(b: string, @logPosition c: boolean) {
      console.log(b);
    }
  }
  
  new Cow().say('hello', false); // outputs 1 (newline) hello
//   Questo è simile all' @Inject di Angular
   