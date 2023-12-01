package assignment3.swe642.repository;

import assignment3.swe642.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentSurveyRepository extends JpaRepository<Student, Long>{

}
