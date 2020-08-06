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
