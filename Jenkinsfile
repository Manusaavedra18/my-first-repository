pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                git checkout master
                git checkout . 
                git pull origin master
                npm install 
                npm run build 
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