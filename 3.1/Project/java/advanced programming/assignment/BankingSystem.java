// Base class demonstrating ENCAPSULATION
class BankAccount {
    // Private fields - ENCAPSULATION: data hiding
    private String accountNumber;
    private String accountHolderName;
    private double balance;
    private String accountType;
    
    // Constructor
    public BankAccount(String accountNumber, String accountHolderName, double initialBalance, String accountType) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance;
        this.accountType = accountType;
    }
    
    // Public getter methods 
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getAccountHolderName() {
        return accountHolderName;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public String getAccountType() {
        return accountType;
    }
    
    // Public setter methods with validation
    public void setAccountHolderName(String accountHolderName) {
        if (accountHolderName != null && !accountHolderName.trim().isEmpty()) {
            this.accountHolderName = accountHolderName;
        } else {
            System.out.println("Invalid account holder name");
        }
    }
    
    // Public methods to manipulate balance 
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            System.out.println("New Balance: $" + balance);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            System.out.println("Remaining Balance: $" + balance);
            return true;
        } else {
            System.out.println("Insufficient funds or invalid amount");
            return false;
        }
    }
    
    public void displayAccountInfo() {
        System.out.println("\n=== Account Information ===");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolderName);
        System.out.println("Account Type: " + accountType);
        System.out.println("Balance: $" + balance);
    }
}

//SavingsAccount inherits from BankAccount
class SavingsAccount extends BankAccount {
    // field specific to SavingsAccount
    private double interestRate;
    private double minimumBalance;
    
    // Constructor calling superclass constructor
    public SavingsAccount(String accountNumber, String accountHolderName, 
                         double initialBalance, double interestRate, double minimumBalance) {
        super(accountNumber, accountHolderName, initialBalance, "Savings");
        this.interestRate = interestRate;
        this.minimumBalance = minimumBalance;
    }
    
    // Getter and setter for interestRate 
    public double getInterestRate() {
        return interestRate;
    }
    
    public void setInterestRate(double interestRate) {
        if (interestRate >= 0) {
            this.interestRate = interestRate;
        } else {
            System.out.println("Interest rate cannot be negative");
        }
    }
    
    public double getMinimumBalance() {
        return minimumBalance;
    }
    
    // Method specific to SavingsAccount
    public void applyInterest() {
        double interest = getBalance() * (interestRate / 100);
        deposit(interest);
        System.out.println("Interest applied: $" + interest);
    }
    
    //method overriding
    @Override
    public boolean withdraw(double amount) {
        if (getBalance() - amount >= minimumBalance) {
            return super.withdraw(amount);
        } else {
            System.out.println("Withdrawal denied! Minimum balance requirement not met.");
            System.out.println("Minimum balance required: $" + minimumBalance);
            return false;
        }
    }
    
    // Overriding display method to show additional information
    @Override
    public void displayAccountInfo() {
        super.displayAccountInfo();
        System.out.println("Interest Rate: " + interestRate + "%");
        System.out.println("Minimum Balance: $" + minimumBalance);
    }
}

// CurrentAccount inherits from BankAccount
class CurrentAccount extends BankAccount {
    private double overdraftLimit;
    
    public CurrentAccount(String accountNumber, String accountHolderName, 
                         double initialBalance, double overdraftLimit) {
        super(accountNumber, accountHolderName, initialBalance, "Current");
        this.overdraftLimit = overdraftLimit;
    }
    
    public double getOverdraftLimit() {
        return overdraftLimit;
    }
    
    public void setOverdraftLimit(double overdraftLimit) {
        if (overdraftLimit >= 0) {
            this.overdraftLimit = overdraftLimit;
        } else {
            System.out.println("Overdraft limit cannot be negative");
        }
    }
    
    // Overriding withdraw method to allow overdraft facility
    @Override
    public boolean withdraw(double amount) {
        if (amount > 0 && (getBalance() - amount) >= -overdraftLimit) {
            // encapsulation to access balance through getter
            double newBalance = getBalance() - amount;
            
            System.out.println("Withdrawn: $" + amount);
            if (newBalance < 0) {
                System.out.println("Overdraft used: $" + Math.abs(newBalance));
            }
            

            deposit(-amount);
            return true;
        } else {
            System.out.println("Withdrawal denied! Exceeds overdraft limit.");
            System.out.println("Overdraft limit: $" + overdraftLimit);
            return false;
        }
    }
    
    @Override
    public void displayAccountInfo() {
        super.displayAccountInfo();
        System.out.println("Overdraft Limit: $" + overdraftLimit);
    }
}

// FixedDepositAccount inherits from BankAccount
class FixedDepositAccount extends BankAccount {
    private int tenureMonths;
    private double fixedInterestRate;
    private String maturityDate;
    
    public FixedDepositAccount(String accountNumber, String accountHolderName, 
                              double initialBalance, int tenureMonths, 
                              double fixedInterestRate, String maturityDate) {
        super(accountNumber, accountHolderName, initialBalance, "Fixed Deposit");
        this.tenureMonths = tenureMonths;
        this.fixedInterestRate = fixedInterestRate;
        this.maturityDate = maturityDate;
    }
    
    // Getters and setters
    public int getTenureMonths() {
        return tenureMonths;
    }
    
    public double getFixedInterestRate() {
        return fixedInterestRate;
    }
    
    public String getMaturityDate() {
        return maturityDate;
    }
    
    // Overriding withdraw method to prevent premature withdrawal
    @Override
    public boolean withdraw(double amount) {
        System.out.println("Fixed Deposit account: Withdrawals not allowed before maturity");
        System.out.println("Maturity Date: " + maturityDate);
        return false;
    }
    
    // Overriding deposit method 
    @Override
    public void deposit(double amount) {
        System.out.println("Fixed Deposit account: Additional deposits not allowed");
    }
    
    // Method to calculate maturity amount
    public double calculateMaturityAmount() {
        double principal = getBalance();
        double interest = principal * (fixedInterestRate / 100) * (tenureMonths / 12.0);
        return principal + interest;
    }
    
    @Override
    public void displayAccountInfo() {
        super.displayAccountInfo();
        System.out.println("Tenure: " + tenureMonths + " months");
        System.out.println("Fixed Interest Rate: " + fixedInterestRate + "%");
        System.out.println("Maturity Date: " + maturityDate);
        System.out.println("Expected Maturity Amount: $" + calculateMaturityAmount());
    }
}

// Main class to test the banking system
public class BankingSystem {
    public static void main(String[] args) {
        System.out.println("=== BANKING SYSTEM _ ENCAPSULATION AND INHERITANCE ===\n");
        
        // Creating different types of accounts - POLYMORPHISM
        BankAccount savings = new SavingsAccount("SAV001", "Eliud Wanja", 5000, 4.5, 1000);
        BankAccount current = new CurrentAccount("CUR001", "Timothy Khalayi", 3000, 2000);
        BankAccount fixedDeposit = new FixedDepositAccount("FD001", "Johnson Waweru", 10000, 12, 6.5, "2024-12-31");
        
        //  ENCAPSULATION through getters and setters
        System.out.println("===  ENCAPSULATION ===");
        System.out.println("Account Holder Name: " + savings.getAccountHolderName());
        savings.setAccountHolderName("Johnathan Doe"); 
        System.out.println("Updated Account Holder Name: " + savings.getAccountHolderName());
        
        // different behaviors through INHERITANCE
        System.out.println("\n===  INHERITANCE - SAVINGS ACCOUNT ===");
        savings.displayAccountInfo();
        savings.deposit(1000);
        savings.withdraw(4500); 
        savings.withdraw(1000); 
        
        System.out.println("\n=== INHERITANCE - CURRENT ACCOUNT ===");
        current.displayAccountInfo();
        current.withdraw(4000); 
        current.withdraw(3000); 
        
        System.out.println("\n===  INHERITANCE - FIXED DEPOSIT ACCOUNT ===");
        fixedDeposit.displayAccountInfo();
        fixedDeposit.deposit(500); 
        fixedDeposit.withdraw(1000);
        
        // Demonstrate polymorphism
        System.out.println("\n===  POLYMORPHISM ===");
        BankAccount[] accounts = {savings, current, fixedDeposit};
        
        for (BankAccount account : accounts) {
            System.out.println("\n--- Processing " + account.getAccountType() + " Account ---");
            account.displayAccountInfo();
            
            // Each account type behaves differently due to method overriding
            boolean withdrawalResult = account.withdraw(1000);
            System.out.println("Withdrawal successful: " + withdrawalResult);
        }
        
        // SavingsAccount specific method
        System.out.println("\n===  SUBCLASS-SPECIFIC METHOD ===");
        if (savings instanceof SavingsAccount) {
            SavingsAccount savingsAcc = (SavingsAccount) savings;
            savingsAcc.applyInterest();
            savingsAcc.displayAccountInfo();
        }
    }
}