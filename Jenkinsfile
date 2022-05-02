pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                bat 'git checkout master'
                bat 'git checkout .'
                bat 'git pull origin master'
                bat 'npm cache clean --force'
                bat 'npm start'
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}