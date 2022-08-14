<!DOCTYPE HTML>
<html>
 <head> 
  <style>
   #p1
   {
	   color:green;
	   text-align:center;
       right:10px;			 
       background-color:black;
	   border-width:50px;
	   padding:60px;
       margin:10px;
	   font-size:50px;
	   font-family:Lucida Handwriting;
   }   
 
 
 
 
  </style>
 <body> 
   <p id="p1">
      <?php
        echo "<b> Thank You! for filling this form.Your Response has been recorded. </b>"; 
      ?>	
   </p>
   <p>
      <?php
 // Program to connect my sql server with php starts here.
	    mysqli_connect('localhost','Prince','Princewebpage');  
	    $cid=mysqli_connect('localhost','Prince','Princewebpage');   // connection id is stored in variable cid ;
	    if (!$cid)
	      echo "Connection failed";
	    else  
		{
	      echo "CONNECTION DONE";
		}
		  $Name=$_POST['Username']; // key name should be same as given in name attribute while making form in html.
          $Password=$_POST['password'];
          $Gender=$_POST['gender'];
		  $Date=$_POST['date'];
          $Courses=$_POST['check'];  
          $chk="";  
          foreach($Courses as $chk1)  
           {  
            $chk .= $chk1.",";  
           }  
         mysqli_select_db($cid,'w1');		   // to connect database // Each time when there is a requirement that php needs to communicate with mysql server we have to pass the connection id.
		 $q= "insert into princeweb (Name,Password,Gender,Date,Courses) values ('$Name','$Password','$Gender','$Date','$chk')";
		 $i=mysqli_query($cid,$q);
		 echo $i;
         mysqli_close($cid); // to close database connection ;
		 ?> 
   </p>
 </body>
</html>
