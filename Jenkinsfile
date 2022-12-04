pipeline {
    agent {
        docker {
            image 'node:16.17.1-alpine'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'node --version'
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
}
