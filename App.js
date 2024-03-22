import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const coursesData = [
  {
    id: 1,
    name: 'Software Engineering',
    description: 'Learn the fundamentals of computer science and software engineering.',
    image: 'Software Engineering.jpg', // Placeholder image URL
    requirements: 'Minimum of 4 creadits in Maths and Physical Science included.',
    rating: 6.0,
    
  },
  {
    id: 2,
    name: 'Graphic Design',
    description: 'Explore your creativity and learn graphic design techniques.',
    image: 'Graphic Design2.jpg', // Placeholder image URL
    requirements: 'Minimum of 3 credits in Maths and Computer Skills involved.',
    rating: 6.0,
    
  },
  {
    id: 3,
    name: 'Diploma in Tourism Management',
    description: 'Explore some great adventure of the world.',
    image: 'Tourism2.jpg',
    requirements: 'Minimum of 2 credits in English and Sesotho',
    rating: 6.0,
  },
  {
    id: 4,
    name: 'Architecture',
    description: 'Learn how to design and draw the blue-prints.',
    image: 'Architecture1.jpg',
    requirements: 'Minimum of 4 creadits in maths and Physical science included.',
    rating: 6.0,
  },
  {
    id: 5,
    name: 'Film Production',
    description: 'Learn how to make mostly rated films in the world.',
    image: 'Film Production.jpg',
    requirements: 'Minimum of 3 credits in English, Maths and any other subject.',
    rating: 0,
  },
  // Add more courses as needed
];

const CourseItem = ({ course, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(course)}>
      <Image source={{ uri: course.image }} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
        <Text style={styles.courseRequirements}>{course.requirements}</Text>
        <Text style={styles.courseRating}>Rating: {course.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const renderCourseItem = ({ item }) => {
    return <CourseItem course={item} onPress={setSelectedCourse} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.limkokwing}>LIMKOKWING </Text>
      <Text style={styles.university}>UNIVERSITY</Text>
      <Text style={styles.theBest}>Be a proud limkokwing graduate.</Text>
      <Text style={styles.coursePrograms}>Programs</Text>
      <FlatList
        data={coursesData}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.courseList}
      />
      {selectedCourse && (
        <View style={styles.selectedCourseContainer}>
          <Text style={styles.selectedCourseName}>{selectedCourse.name}</Text>
          <Text style={styles.selectedCourseDescription}>{selectedCourse.description}</Text>
          <Text style={styles.selectedCourseRequirements}>{selectedCourse.requirements}</Text>
          <Text style={styles.selectedCourseRating}>Rating: {selectedCourse.rating}</Text>
        </View>
      )}

      <Text style={styles.limkoWelcome}>WELCOME TO LIMKOKWING UNIVERSITY OF CREATIVE TECHNOLOGY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e0f',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  limkokwing: {
    fontSize: 70,
    fontFamily: 'bold',
    color: '#00ced1',
  },
  university: {
    fontSize: 50,
    fontFamily: 'bold',
    color: '#00ced1',
  },
  theBest: {
    fontSize: 30,
    backgroundColor: '#ff0800',
    color: '#fff'
  },
  coursePrograms: {
    fontSize: 60,
    fontFamily: 'bold',
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  courseImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  courseInfo: {
    flex: 1,
    color: '#00ced1',
  },
  courseName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00ced1',
  },
  courseDescription: {
    fontSize: 20,
    color: '#00ced1',
  },
  courseRequirements: {
    fontSize: 20,
    color: '#00ced1',
  },
  courseRating: {
    fontSize: 30,
    marginTop: 5,
    color: '#00ced1',
  },
  selectedCourseContainer: {
    marginTop: 20,
    color: '#fff',
  },
  selectedCourseName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  selectedCourseDescription: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
  },
  selectedCourseRequirements: {
    fontSize: 20,
    color: '#fff',
  },
  selectedCourseRating: {
    fontSize: 20,
    color: '#fff',
  },
  limkoWelcome: {
    fontSize: 30,
    marginTop: 30,
    color: '#7df9ff',
  },
});

export default App;
