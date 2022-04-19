package MatrimonyForm.MatrimonyRegistrationForm;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Matrimony 
{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int matId;
	private String matUname;
	private String matFname;
	private String matGen;
	private String matQname;
	private int matAgeLtd;
	private int matCno;
	private String matMail;
	private String[] matLan;
	public Matrimony(String matUname, String matFname, String matGen, String matQname, int matAgeLtd, int matCno,
			String matMail, String[] matLan) {
		super();
		this.matUname = matUname;
		this.matFname = matFname;
		this.matGen = matGen;
		this.matQname = matQname;
		this.matAgeLtd = matAgeLtd;
		this.matCno = matCno;
		this.matMail = matMail;
		this.matLan = matLan;
	}
	public Matrimony() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Matrimony [matId=" + matId + ", matUname=" + matUname + ", matFname=" + matFname + ", matGen=" + matGen
				+ ", matQname=" + matQname + ", matAgeLtd=" + matAgeLtd + ", matCno=" + matCno + ", matMail=" + matMail
				+ ", matLan=" + Arrays.toString(matLan) + "]";
	}
	public int getMatId() {
		return matId;
	}
	public void setMatId(int matId) {
		this.matId = matId;
	}
	public String getMatUname() {
		return matUname;
	}
	public void setMatUname(String matUname) {
		this.matUname = matUname;
	}
	public String getMatFname() {
		return matFname;
	}
	public void setMatFname(String matFname) {
		this.matFname = matFname;
	}
	public String getMatGen() {
		return matGen;
	}
	public void setMatGen(String matGen) {
		this.matGen = matGen;
	}
	public String getMatQname() {
		return matQname;
	}
	public void setMatQname(String matQname) {
		this.matQname = matQname;
	}
	public int getMatAgeLtd() {
		return matAgeLtd;
	}
	public void setMatAgeLtd(int matAgeLtd) {
		this.matAgeLtd = matAgeLtd;
	}
	public int getMatCno() {
		return matCno;
	}
	public void setMatCno(int matCno) {
		this.matCno = matCno;
	}
	public String getMatMail() {
		return matMail;
	}
	public void setMatMail(String matMail) {
		this.matMail = matMail;
	}
	public String[] getMatLan() {
		return matLan;
	}
	public void setMatLan(String[] matLan) {
		this.matLan = matLan;
	}

}
