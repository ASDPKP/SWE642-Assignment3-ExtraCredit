package assignment3.swe642.controller;


import assignment3.swe642.exception.ResourceNotFoundException;
import assignment3.swe642.model.Student;
import assignment3.swe642.repository.StudentSurveyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class StudentSurveyController {

    @Autowired
    private StudentSurveyRepository studentSurveyRepository;

    //Get Al Student Surveys
    @GetMapping("/studentsurvey")
    public List<Student> getAllStudentSurveys() {
        return studentSurveyRepository.findAll();
    }

    //Create a new student survey
    @PostMapping ("/studentsurvey")
    public Student createSurvey(@RequestBody Student student) {
        return studentSurveyRepository.save(student);
    }

    @GetMapping("/studentsurvey/{id}")
    public ResponseEntity<Student> getStudentSurveyById(@PathVariable Long id){
        Student student = studentSurveyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("the survey does not exist in the database"));
        return ResponseEntity.ok(student);
    }

    @PutMapping("/studentsurvey/{id}")
    public ResponseEntity<Student> updateSurvey(@PathVariable Long id,@RequestBody Student studentsurveydetails) {
        Student student = studentSurveyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("the survey does not exist in the database"));
        student.setFirstName(studentsurveydetails.getFirstName());
        student.setLastName(studentsurveydetails.getLastName());
        student.setEmailId(studentsurveydetails.getEmailId());
        student.setStreetAddress(studentsurveydetails.getStreetAddress());
        student.setCity(studentsurveydetails.getCity());
        student.setState(studentsurveydetails.getState());
        student.setZipCode(studentsurveydetails.getZipCode());
        student.setTelephone(studentsurveydetails.getTelephone());
        student.setMostLiked(studentsurveydetails.getMostLiked());
        student.setInterest(studentsurveydetails.getInterest());
        student.setRecommend(studentsurveydetails.getRecommend());
        student.setComment(studentsurveydetails.getComment());

        Student updatedStudent = studentSurveyRepository.save(student);

        return ResponseEntity.ok(updatedStudent);
    }

    @DeleteMapping("/studentsurvey/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSurvey(@PathVariable Long id) {
        Student student = studentSurveyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("the survey does not exist in the database"));

        studentSurveyRepository.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
