public abstract class AbstractComputer {
    int gpu;
    int card;
    String brand;

    abstract void computePower(int prevProcess,int newProcess);

    public void setGpu(int gpu) {
        this.gpu = gpu;
    }

    public void setCard(int card) {
        this.card = card;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}
