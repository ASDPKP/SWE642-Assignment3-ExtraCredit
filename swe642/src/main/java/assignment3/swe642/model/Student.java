package assignment3.swe642.model;

import jakarta.persistence.*;

@Entity
@Table(name="studentSurveys")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "EMAIL_ID")
    private String emailId;

    @Column(name = "STREET_ADDRESS")
    private String streetAddress;

    @Column(name = "CITY")
    private String city;

    @Column(name = "STATE")
    private String state;

    @Column(name = "ZIP_CODE")
    private int zipCode;

    @Column(name = "PHONE_NUMBER")
    private String telephone;

    @Column(name = "MOST_LIKED")
    private String mostLiked;

    @Column(name = "INTEREST")
    private String interest;

    @Column(name = "RECOMMEND")
    private String recommend;

    @Column(name = "COMMENTS")
    private String comment;

    public Student() {

    }

    public Student(String firstName, String lastName, String emailId, String streetAddress, String city, String state, int zipCode, String telephone, String mostLiked, String interest, String recommend, String comment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.telephone = telephone;
        this.emailId = emailId;
        this.mostLiked = mostLiked;
        this.interest = interest;
        this.recommend = recommend;
        this.comment = comment;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getMostLiked() {
        return mostLiked;
    }

    public void setMostLiked(String mostLiked) {
        this.mostLiked = mostLiked;
    }

    public String getInterest() {
        return interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
    }

    public String getRecommend() {
        return recommend;
    }

    public void setRecommend(String recommend) {
        this.recommend = recommend;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
