import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IllegalAccessException {
        Singleton b = Singleton.getInstance();
        System.out.println(b);

        ArrayList<ComputerClient> computers = new ArrayList<>();
        computers.add(new ComputerClient("Asus"));
        computers.add(new ComputerClient("Asus"));
        computers.add(new ComputerClient("Leno"));
        computers.add(new ComputerClient("Leno"));
        computers.add(new ComputerClient("Asus"));

        computers.get(0).getComputing(10);
        computers.get(1).getComputing(20);
        computers.get(2).getComputing(30);
        computers.get(3).getComputing(40);
        System.out.println(computers.get(0).prevProcess);
        System.out.println(computers.get(1).prevProcess);

        System.out.println("Number of Asus computers : " + AsusComputer.count);
        System.out.println("Number of Lenovo computers : " + LenovoComputer.num);
    }
}
