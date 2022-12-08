pipeline {
    agent { dockerfile true }
    stages {
        stage('Build') {
            steps {
                sh '''
                    node --version
                    npm install
                    npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                    echo "Testing.."
                '''
            }
        }
    }
}
