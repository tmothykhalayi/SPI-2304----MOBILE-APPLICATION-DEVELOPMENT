class MyThread extends Thread
{
private String name;
MyThread(String name){//assigning variable(constructor)
this.name=name;
}
public void run()
{
System.out.println(name + "this is a string thread message"+Thread.currentThread()+"");
}
public static void main(String[] args)
{
System.out.println("main process thread starting....");
MyThread x1=new MyThread ("Thread1");
MyThread x2=new MyThread("Thread2");
x1.start();
x2.start();



class MyThread extends Thread
{
public MyThread(Sting name)
{
super(name);
}
public void run()
{
for(int i=1;i<=3;i++)
{
System.out.println(getName()+"priolity"+getpriolity()+"its counting..."+i);
try{
Thread.sleep(600);//pausing for clarity
}
catch(interrupted exception r){
System.out.println(

class MyThread extends Thread
{
public MyThread(Sting name)
{
super(name);
}
public void run()
{
for(int i=1;i<=3;i++)
{
System.out.println(getName()+"priolity"+getpriolity()+"its counting..."+i);
try{
Thread.sleep(600);//pausing for clarity
}
catch(interrupted exception r){
System.out.println(getname()+"interrupted");
}
}
}
public static void main(String[] args)
{
MyThread x1=new MyThread("low priolity");
MyThread x2=new MyThread("Normal priolity");
MyThread x3=new MyThread("High priolity");
//setting priolities of threads
MyThread.x1=new (MyThread("LOW"));
MyThread.x2=new (MyThread("Normal"));
MyThread.x3=new (MyThread("High"));
x1.setpriolity(Thread.MIN_PRIOLITY );
x2.setpriolity(Thread.NORM_PRIOLITY );
x3.setpriolity(Thread.MAX_PRIOLITY );
x1.start();
x2.start();
x3.start();
}
}