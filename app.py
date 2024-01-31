from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

def display_mcq(topic):
    # Randomly select 7 questions from the list of history questions
    # Select 3 random questions of level 1, 3 random questions of level 3, and 4 random questions of level 2
    mcq_level1 = pd.read_csv(f"static/MCQ/level1_{topic.lower()}.mcq", sep="|").sample(n=3)
    mcq_level2 = pd.read_csv(f"static/MCQ/level2_{topic.lower()}.mcq", sep="|").sample(n=4)
    mcq_level3 = pd.read_csv(f"static/MCQ/level3_{topic.lower()}.mcq", sep="|").sample(n=3)

    mcq = pd.concat([mcq_level1, mcq_level2, mcq_level3], ignore_index=True)

    print("************", mcq.columns)

    return render_template('quiz.html',
                           questions=list(mcq["question"])[1:],
                           options=list(mcq["options"])[1:],
                           answers=list(mcq["answer"])[1:],
                           question1=list(mcq["question"])[0],
                           option1=list(mcq["options"])[0].split(";")[0],
                           option2=list(mcq["options"])[0].split(";")[1],
                           option3=list(mcq["options"])[0].split(";")[2],
                           answer1=list(mcq["answer"])[0],
                           topic=topic
                           )


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/History')
def history():
    return display_mcq("History")


@app.route('/Geography')
def geography():
    return display_mcq("Geography")

@app.route('/Animals')
def animals():
    return display_mcq("Animals")

@app.route('/Sports')
def sports():
    return display_mcq("Sports")

@app.route('/Maths')
def maths():
    return display_mcq("Maths")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

