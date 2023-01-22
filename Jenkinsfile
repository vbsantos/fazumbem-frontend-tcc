pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                githubNotify(description: 'Estágio 1 - Frontend', status: 'PENDING');
                sh 'docker build --rm -t vbsantos-tcc/frontend:latest .'
            }
        }
    }
    post {
        success {
            githubNotify(description: 'Estágio 1 - Frontend', status: 'SUCCESS');
        }
        failure {
            githubNotify(description: 'Estágio 1 - Frontend', status: 'FAILURE');
        }
    }
}
