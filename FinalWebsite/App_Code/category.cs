using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;
using System.Data;
using System.Windows.Forms;
using System.Net.Mail;
using System.Web.Services.Protocols;
using System.Web.Script.Services;

/// <summary>
/// Summary description for category
/// </summary>
[WebService(Namespace = "http://shopping.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class category : System.Web.Services.WebService
{

    public category()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    public struct categoryList
    {
        public string Id;
        public string id;
        public string name;
    }
    public struct subCategoryList
    {
        public int Id;
        public int categoryId;
        public string categoryName;
        public int subCategoryId;
        public string subCategoryName;
    }
    public struct userDetail
    {
        public int id;
        public string name;
        public string password;
        public string email;
        public string phone;
        public string address;
        public string zipcode;
        public string city;
        public string country;
        public string comment;
    }
    public struct resultStatus
    {
        public bool errorStatus;
        public string errorMessage;
        public int id;
    }
    [WebMethod]
    public categoryList[] ListCategory()
    {
        categoryList[] currentList = new categoryList[1];
        string connetionString = null;
        int i = 0;
        connetionString = "Data Source=VC-SQL2008;Initial Catalog=CORPRESTORE;Integrated Security=True";
        try
        {
            string sql = "Select * from testCategoryTable;";
            using (SqlConnection sqlCnn =
                       new SqlConnection(connetionString))
            {
                sqlCnn.Open();
                SqlCommand sqlCmd = new SqlCommand(sql, sqlCnn);
                SqlDataReader reader = sqlCmd.ExecuteReader();
                while (reader.Read())
                {
                    if (i > 0)
                    {
                        Array.Resize(ref currentList, i + 1);
                    }
                    currentList[i].Id = reader["Id"].ToString().Trim();
                    currentList[i].id = reader["Category_id"].ToString().Trim();
                    currentList[i].name = reader["Category_name"].ToString().Trim();
                    i++;
                }
                sqlCmd.Dispose();
                sqlCnn.Close();
                reader.Close();
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show("Can not open connection ! ");
        }
        return currentList;
    }
    [WebMethod]
    public subCategoryList[] ListSubCategory(int categoryId)
    {
        subCategoryList[] currentListSubCategory = new subCategoryList[1];
        string connetionString = null;
        int i = 0;
        connetionString = "Data Source=VC-SQL2008;Initial Catalog=CORPRESTORE;Integrated Security=True";
        try
        {
            string sql = "Select * from testSubCategoryTable where Category_id = " + categoryId + ";";
            using (SqlConnection sqlCnn = new SqlConnection(connetionString))
            {
                sqlCnn.Open();
                SqlCommand sqlCmd = new SqlCommand(sql, sqlCnn);
                SqlDataReader reader = sqlCmd.ExecuteReader();
                while (reader.Read())
                {
                    if (i > 0)
                    {
                        Array.Resize(ref currentListSubCategory, i + 1);
                    }
                    currentListSubCategory[i].Id = Convert.ToInt32(reader["Id"]);
                    currentListSubCategory[i].categoryId = Convert.ToInt32(reader["Category_id"]);
                    currentListSubCategory[i].categoryName = reader["Category_name"].ToString().Trim();
                    currentListSubCategory[i].subCategoryId = Convert.ToInt32(reader["SubCategory_id"]);
                    currentListSubCategory[i].subCategoryName = reader["SubCategory_name"].ToString().Trim();
                    i++;
                }
                sqlCmd.Dispose();
                sqlCnn.Close();
                reader.Close();
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show("Can not open connection ! ");
        }
        return currentListSubCategory;
    }
    [WebMethod]
    public resultStatus create(string userName, string userPassword, string userEmail, string userPhone, string userAddress, string userZipcode, string userCity, string userCountry, string userComment)
    {
        resultStatus thisResultStatus = new resultStatus();
        string connetionString = null;
        int userId = 1;
        connetionString = "Data Source=VC-SQL2008;Initial Catalog=CORPDEV;Integrated Security=True";
        try
        {
            string sql = "INSERT INTO testUserTable (User_id, User_name, User_password, User_email, User_phone, User_address, User_zipcode, User_city, User_country, User_comment) VALUES (@User_id, @User_name, @User_password, @User_email, @User_phone, @User_address, @User_zipcode, @User_city, @User_country, @User_comment);";
            using (SqlConnection sqlCnn = new SqlConnection(connetionString))
            {
                sqlCnn.Open();
                SqlCommand sqlCmd = new SqlCommand(sql, sqlCnn);
                sqlCmd.CommandText = sql;
                sqlCmd.Parameters.AddWithValue("@User_id", userId);
                sqlCmd.Parameters.AddWithValue("@User_name", userName);
                sqlCmd.Parameters.AddWithValue("@User_password", userPassword);
                sqlCmd.Parameters.AddWithValue("@User_email", userEmail);
                sqlCmd.Parameters.AddWithValue("@User_phone", userPhone);
                sqlCmd.Parameters.AddWithValue("@User_address", userAddress);
                sqlCmd.Parameters.AddWithValue("@User_zipcode", userZipcode);
                sqlCmd.Parameters.AddWithValue("@User_city", userCity);
                sqlCmd.Parameters.AddWithValue("@User_country", userCountry);
                sqlCmd.Parameters.AddWithValue("@User_comment", userComment);
                sqlCmd.ExecuteNonQuery();
                sqlCmd.Dispose();
                sqlCnn.Close();
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show("error");
        }
        return thisResultStatus;
    }
    [WebMethod]
    public userDetail[] signIn(string userName, string userPassword)
    {
        userDetail[] thisUserDetail = new userDetail[1];
        string connetionString = null;
        int i = 0;
        connetionString = "Data Source=VC-SQL2008;Initial Catalog=CORPRESTORE;Integrated Security=True";
        try
        {
            string sql = "SELECT * FROM testUserTable where User_name = '" + userName + "' AND User_password = '" + userPassword + "'";
            using (SqlConnection sqlCnn = new SqlConnection(connetionString))
            {
                sqlCnn.Open();
                SqlCommand sqlCmd = new SqlCommand(sql, sqlCnn);
                SqlDataReader reader = sqlCmd.ExecuteReader();
                while (reader.Read())
                {
                    thisUserDetail[i].id = Convert.ToInt32(reader["User_id"]);
                    thisUserDetail[i].name = reader["User_name"].ToString().Trim();
                    thisUserDetail[i].password = reader["User_password"].ToString().Trim();
                    thisUserDetail[i].email = reader["User_email"].ToString().Trim();
                    thisUserDetail[i].phone = reader["User_phone"].ToString().Trim();
                    thisUserDetail[i].address = reader["User_address"].ToString().Trim();
                    thisUserDetail[i].zipcode = reader["User_zipcode"].ToString().Trim();
                    thisUserDetail[i].city = reader["User_city"].ToString().Trim();
                    thisUserDetail[i].country = reader["User_country"].ToString().Trim();
                    thisUserDetail[i].comment = reader["User_comment"].ToString().Trim();
                }
                sqlCmd.Dispose();
                sqlCnn.Close();
                reader.Close();
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show("Can not open connection ! ");
        }
        return thisUserDetail;
    }
    [WebMethod]
    public resultStatus resetPassword(string userEmail)
    {
        resultStatus thisResultStatus = new resultStatus();
        string connetionString = null;
        int i = 0;
        connetionString = "Data Source=VC-SQL2008;Initial Catalog=CORPRESTORE;Integrated Security=True";
        try
        {
            DataSet ds = new DataSet();
            string sql = "SELECT User_name,User_password FROM testUserTable Where User_email= '" + userEmail + "'";
            using (SqlConnection sqlCnn = new SqlConnection(connetionString))
            {
                sqlCnn.Open();
                SqlCommand cmd = new SqlCommand(sql, sqlCnn);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(ds);
                sqlCnn.Close();
            }
            if (ds.Tables[0].Rows.Count > 0)
            {
                MailMessage Msg = new MailMessage();
                // Sender e-mail address.
                Msg.From = new MailAddress(userEmail);
                // Recipient e-mail address.
                Msg.To.Add(userEmail);
                Msg.Subject = "Your Password Details";
                Msg.Body = "Hi, <br/>Please check your Login Detailss<br/><br/>Your Username: " + ds.Tables[0].Rows[0]["User_name"] + "<br/><br/>Your Password: " + ds.Tables[0].Rows[0]["User_password"] + "<br/><br/>";
                Msg.IsBodyHtml = true;
                // your remote SMTP server IP.
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.Credentials = new System.Net.NetworkCredential("blankemail911@gmail.com", "911blankemail");
                smtp.EnableSsl = true;
                smtp.Send(Msg);
                thisResultStatus.errorMessage = "Your Password Details Sent to your mail";
                thisResultStatus.errorStatus = true;
            }
            else
            {
                thisResultStatus.errorMessage = "The Email you entered not exists.";
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("{0} Exception caught.", ex);
        }
        return thisResultStatus;
    }
}
