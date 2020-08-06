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
