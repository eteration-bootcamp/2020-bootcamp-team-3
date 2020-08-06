public class LenovoComputer extends AbstractComputer {
    static int num ;

    public LenovoComputer() {
        num++;
    }

    @Override
    void computePower(int prevProcess,int newProcess) {
        System.out.println("Computing power of"+ this.brand+ "is" + this.gpu + "previous process was at:" + prevProcess + "new process is at"
                + newProcess);
    }
}
