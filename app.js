 let form = document.querySelector('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        let add_list_btn = document.querySelector('#add-to-list-btn');
        let calculation_btn = document.querySelector('#Calculation-btn');
        let inputs = document.querySelectorAll('input');
        let list_cont = document.querySelector('.lists-cont');
        let result_cont = document.querySelector('#result-cont');
        let income_ul = document.createElement('ul');
        list_cont.appendChild(income_ul);

        // arrays to store values
        let salaryArr = [];
        let otherIncomeArr = [];
        let fixedExpArr = [];
        let otherExpArr = [];

        add_list_btn.addEventListener('click', () => {
            // salary
            if (inputs[0].value !== '') {
                let li = document.createElement('li');
                li.classList.add('li');
                li.style.color = 'green';
                li.textContent = `Salary: ${inputs[0].value}`;
                let delBtn = document.createElement('button');
                delBtn.textContent = 'Delete';
                delBtn.classList.add('li-delete-button');
                li.appendChild(delBtn);
                income_ul.appendChild(li);
                salaryArr.push(Number(inputs[0].value));

                delBtn.addEventListener('click', () => {
                    li.remove();
                    salaryArr.splice(salaryArr.indexOf(Number(inputs[0].value)), 1);
                });
            }

            // other income
            if (inputs[1].value !== '') {
                let li = document.createElement('li');
                li.classList.add('li');
                li.style.color = 'green';
                li.textContent = `Other Income: ${inputs[1].value}`;
                let delBtn = document.createElement('button');
                delBtn.textContent = 'Delete';
                delBtn.classList.add('li-delete-button');
                li.appendChild(delBtn);
                income_ul.appendChild(li);
                otherIncomeArr.push(Number(inputs[1].value));

                delBtn.addEventListener('click', () => {
                    li.remove();
                    otherIncomeArr.splice(otherIncomeArr.indexOf(Number(inputs[1].value)), 1);
                });
            }

            // fixed expense
            if (inputs[2].value !== '') {
                let li = document.createElement('li');
                li.classList.add('li');
                li.style.color = 'red';
                li.textContent = `Fixed Expense: ${inputs[2].value}`;
                let delBtn = document.createElement('button');
                delBtn.textContent = 'Delete';
                delBtn.classList.add('li-delete-button');
                li.appendChild(delBtn);
                income_ul.appendChild(li);
                fixedExpArr.push(Number(inputs[2].value));

                delBtn.addEventListener('click', () => {
                    li.remove();
                    fixedExpArr.splice(fixedExpArr.indexOf(Number(inputs[2].value)), 1);
                });
            }

            // other expense
            if (inputs[3].value !== '') {
                let li = document.createElement('li');
                li.classList.add('li');
                li.style.color = 'red';
                li.textContent = `Other Expense: ${inputs[3].value}`;
                let delBtn = document.createElement('button');
                delBtn.textContent = 'Delete';
                delBtn.classList.add('li-delete-button');
                li.appendChild(delBtn);
                income_ul.appendChild(li);
                otherExpArr.push(Number(inputs[3].value));

                delBtn.addEventListener('click', () => {
                    li.remove();
                    otherExpArr.splice(otherExpArr.indexOf(Number(inputs[3].value)), 1);
                });
            }

            // clear input fields
            inputs.forEach(inp => inp.value = '');
        });

        calculation_btn.addEventListener('click', () => {
            result_cont.innerHTML = '';

            let totalIncome = salaryArr.reduce((a, b) => a + b, 0) + otherIncomeArr.reduce((a, b) => a + b, 0);
            let totalExpense = fixedExpArr.reduce((a, b) => a + b, 0) + otherExpArr.reduce((a, b) => a + b, 0);

            let income_h3 = document.createElement('h3');
            income_h3.textContent = `Total Income: ${totalIncome}`;
            income_h3.style.color = 'green';
            result_cont.appendChild(income_h3);

            let exp_h3 = document.createElement('h3');
            exp_h3.textContent = `Total Expense: ${totalExpense}`;
            exp_h3.style.color = 'red';
            result_cont.appendChild(exp_h3);

            let balance = document.createElement('h2');
            balance.classList.add('h3');
            balance.style.fontSize = '35px';
            let net = totalIncome - totalExpense;

            if (net >= 0) {
                balance.textContent = `You are Saving: ${net}`;
                balance.style.color = 'green';
            } else {
                balance.textContent = `You are in Deficit: ${Math.abs(net)}`;
                balance.style.color = 'red';
            }

            result_cont.appendChild(balance);
        });