import re 

def check_password_strength(password):

    if len(password)<8:
        print("->Password Must be Atleast of 8 Charachters")

    if not any(char.isdigit() for char in password):
        print("->Password Must have Atleast one digit")       

    if not any(char.isupper() for char in password):
        print("->Password Must have Atleast one uppercase Letter")

    if not any(char.islower()for char in password):
        print("->Password Must contain Atleast one lowercase Letter")

    if not re.search(r'[!@#$%^&*()<>?/]',password):
        print("->Password Must contain Atleast one Special Charachter")   
        
    else:
     print("Strong:Your Password is Secured and Strong")

def password_checker():

   print("----Password Checker----")
   print("Enter the Password to check or type 'exit' to end the Check")

   while True:
        password=input("Enter the Password;-")  

        if password.lower()=="exit":
            print("Than you for using the tool")
            break
        
        result=check_password_strength(password)
        print(result)

if __name__== "__main__":
    password_checker()   
         




    
         
    