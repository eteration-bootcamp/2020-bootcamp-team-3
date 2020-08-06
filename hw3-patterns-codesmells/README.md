# GoF Design Patterns Implementation

##Singleton Implementation

<p>Singleton Implementation allows developers to instantiate only one class at a time.
This allows us to have a global point of access to the instance provided.  If a class is already instantiated the Singleton class returns a reference to the already created instance.
There are different implementations of the Singleton pattern. In this example we have implemented the <strong>eager initialization</strong> over the <strong>lazy initialization</strong>
which makes the Singleton class to initialize the instance once it is requested for the first time.</p>


```java
public class Singleton {
    private Singleton() {}

    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }
}
```

##Factory Implementation
In large scale projects instead of creating each instance with the new operator we want to assign a class 
to create these objects for us. As the project scales if we were to hard code these classes managing and handling new features would become inconvenient. Hence using factory class
in our situation we also want to share the same parameters across our classes which would help us with abstraction. Therefore we used an **abstract class** for our **factory class** and usage of the factory class allowed us to 
implement one more design pattern which is called **Flyweight**. In our project we create a computer for our each user, the creations are handled by the switch/case operator if the input is *Asus* we initialize an AsusComputer and vice versa .

```java
import java.util.HashMap;
import java.util.Map;

public class ComputerFactory {
    private static Map<String,AbstractComputer> flyweights = new HashMap<>();

    public static AbstractComputer getComputer(String key) throws IllegalAccessException {
        if (flyweights.containsKey(key)) return flyweights.get(key);
        AbstractComputer computer;

        switch (key)
        {
            case "Asus":
                computer = new AsusComputer();
                computer.setBrand("Asus Computer");
                computer.gpu=64;
                computer.card=1080;
                break;
            case "Leno":
                computer = new LenovoComputer();
                computer.setBrand("Lenovo Computer");
                computer.gpu=32;
                computer.card=780;
                break;
            default:
                throw new IllegalAccessException("Unsupported Computer");
        }
        flyweights.put(key,computer);
        return computer;


    }
}
```

##FlyWeight Pattern

Again in large scale projects instead of creating an object for each user we can pass the same object for all the users and store different data inside of this object. 
We can identify these datas as **Intinsic Data** and **Extrinsic Data**. With this pattern we can create the same class 100 times and store it inside one initialized object.
**Intinsic Data** is the sharable data that we initialize all our computers with. In the creation we give the same gpu to all the Asus and Lenovo computers hence this data is shared across within the abstract data.
**Extrinsic Data** is the data that is dependant on the context of the classes. This data cannot be shared between other flyweight objects.
```java
public class ComputerClient {
    private AbstractComputer computer;

    public ComputerClient(String name) throws IllegalAccessException {
        this.computer = ComputerFactory.getComputer(name);
    }
    int prevProcess = 0;

    public void getComputing(int newProcess){
        prevProcess = newProcess;
        computer.computePower(prevProcess,newProcess);
    }
}
```
#Code Smells

1. The first smell is the usage of factory for our case we only create 5 *ComputerClient* objects and this is low number of computers created on our part. While creating this number of objects we shouldn't use the factory pattern. 
On the other hand in order to implement flyweight pattern, the factory pattern should be implemented.
2. The second smell is the usage of flyweight pattern. In order to create 5 objects we shouldn't implement the flyweight pattern. This pattern is used for large scale projects however our aim was to implement this pattern whether it was 
necessary or not. On the other hand from our tests we can see that the implementation is correct and if we were to scale this project larger, this implementation would be a nice boilerplate.